"use client";

import React, { useState } from "react";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import EarButton from "./EarButton";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { addDays, format, isPast } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";
import { createAppointment } from "@/actions/actions";

const formSchema = z.object({
  fName: z.string().min(2, {
    message: "Name must be at least 2 characters",
  }),
  lName: z.string().min(2, {
    message: "Last name must be at least 2 characters",
  }),
  phone: z
    .string()
    .regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number")
    .max(12)
    .min(10, {
      message: "Phone number is required",
    }),
  dateTime: z.date().refine(
    (date) =>
      date.getDay() >= 1 &&
      date.getDay() <= 4 && // Monday to Thursday
      date.getHours() >= 8 &&
      date.getHours() <= 16, // 08:00 - 17:00
    {
      message: "Date must be Monday to Thursday between 08:00 and 16:00.",
    }
  ),
});

function AppointmentForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSubmissionTime, setLastSubmissionTime] = useState<number>(0);

  const getNextDay = () => {
    const now = new Date();
    const nextDay = new Date(now);
    nextDay.setDate(now.getDate() + 1);
    nextDay.setHours(8, 0, 0, 0);

    return nextDay;
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),

    defaultValues: {
      fName: "",
      lName: "",
      phone: "",
      dateTime: getNextDay(),
    },
  });

  function handleDateSelect(date: Date | undefined) {
    if (!date || isPast(date)) {
      toast({ description: "Please select a future date" });
      return;
    }

    if (date.getDay() < 1 || date.getDay() > 4) {
      toast({
        description: "Appointments are only available Monday to Thursday",
        variant: "warning",
      });
      return;
    }

    const selectedTime = form.getValues("dateTime");
    date.setHours(selectedTime.getHours(), selectedTime.getMinutes());
    form.setValue("dateTime", date);
  }

  function handleTimeChange(type: "hour" | "minute", value: string) {
    const selectedDate = form.getValues("dateTime") || new Date();
    let newDate = new Date(selectedDate);

    if (type === "hour") {
      const hour = parseInt(value, 10);

      if (hour >= 8 && hour <= 16) {
        newDate.setHours(hour);
      } else {
        toast({
          description: "Please select an hour between 08:00 and 16:00",
          variant: "warning",
        });
        return;
      }
    } else if (type === "minute") {
      newDate.setMinutes(parseInt(value, 10));
    }

    form.setValue("dateTime", newDate);
  }

  async function onSubmit(data: z.infer<typeof formSchema>) {
    // prevent submission if already submitting or if within cooldown period
    let currentTime = Date.now();

    // Prevent further submission if within 30 seconds of the last submission
    if (currentTime - lastSubmissionTime < 30000) {
      toast({
        title: "Appointment Request Rejected",
        description: "You already have a prior appointment scheduled",
        variant: "destructive",
      });

      return;
    }

    setIsSubmitting(true);

    const formattedData = {
      ...data,
      dateTime: format(data.dateTime, "yyyy-MM-dd HH:mm"), // convert dateTime to string
    };

    const response = await createAppointment(formattedData);

    if (response.success) {
      setLastSubmissionTime(currentTime);
      setIsSubmitting(false);

      toast({
        title: "Appointment Scheduled",
        description: `Selected date and time: ${format(
          data.dateTime,
          "EEEE, MMMM d, yyyy 'at' H:mm"
        )}`,
        duration: 5000,
      });
    } else {
      setIsSubmitting(false);

      toast({
        title: "Something went wrong",
        description:
          "Your appointment could not be scheduled, please try again",
        variant: "destructive",
        duration: 5000,
      });
    }
  }

  return (
    <Form {...form}>
      <form className="mt-10 px-1 space-y-8">
        <FormField
          control={form.control}
          name="fName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[12px] font-[600] uppercase tracking-[2px]">
                First Name
              </FormLabel>
              <FormControl>
                <Input placeholder="Your Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="lName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[12px] font-[600] uppercase tracking-[2px]">
                Last Name
              </FormLabel>
              <FormControl>
                <Input placeholder="Your Surname" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[12px] font-[600] uppercase tracking-[2px]">
                Phone Number
              </FormLabel>
              <FormControl>
                <div className="flex items-center space-x-2">
                  <Image
                    src="/images/sa.svg"
                    alt="sa-flag"
                    width={40}
                    height={40}
                  />

                  <Input type="tel" placeholder="Your Number" {...field} />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="dateTime"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel className="text-[12px] font-[600] uppercase tracking-[2px]">
                Enter your date & time (24h)
              </FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full pl-3 text-left h-14 text-base font-extralight py-1 placeholder:text-[#444444] placeholder:text-[14px] md:placeholder:text-[15px] lg:placeholder:text-[16px] md:text-base",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "yyyy/MM/dd HH:mm") // 24-hour format
                      ) : (
                        <span>YYYY/MM/DD HH:mm</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>

                <PopoverContent className="w-auto p-0">
                  <div className="sm:flex">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={handleDateSelect}
                      disabled={(date) => isPast(date)}
                      initialFocus
                    />
                    <div className="flex flex-col sm:flex-row sm:h-[300px] divide-y sm:divide-y-0 sm:divide-x">
                      {/* Hours */}
                      <ScrollArea className="w-64 sm:w-auto">
                        <div className="flex sm:flex-col p-2">
                          {Array.from({ length: 24 }, (_, i) => i)
                            .filter((hour) => hour >= 8 && hour <= 16) // Only include hours from 08:00 to 16:00
                            .map((hour) => (
                              <Button
                                key={hour}
                                size="icon"
                                variant={
                                  field.value && field.value.getHours() === hour
                                    ? "default"
                                    : "ghost"
                                }
                                className="sm:w-full shrink-0 aspect-square"
                                onClick={() =>
                                  handleTimeChange("hour", hour.toString())
                                }
                              >
                                {hour.toString().padStart(2, "0")}:00
                              </Button>
                            ))}
                        </div>

                        <ScrollBar
                          orientation="horizontal"
                          className="sm:hidden"
                        />
                      </ScrollArea>

                      {/* Minutes */}
                      <ScrollArea className="w-64 sm:w-auto">
                        <div className="flex sm:flex-col p-2">
                          {Array.from({ length: 12 }, (_, i) => i * 5).map(
                            (minute) => (
                              <Button
                                key={minute}
                                size="icon"
                                variant={
                                  field.value &&
                                  field.value.getMinutes() === minute
                                    ? "default"
                                    : "ghost"
                                }
                                className="sm:w-full shrink-0 aspect-square"
                                onClick={() =>
                                  handleTimeChange("minute", minute.toString())
                                }
                              >
                                {minute.toString().padStart(2, "0")}
                              </Button>
                            )
                          )}
                        </div>

                        <ScrollBar
                          orientation="horizontal"
                          className="sm:hidden"
                        />
                      </ScrollArea>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>

              <FormDescription className="text-[16px] md:text-[17px] lg:text-[18px] text-[#444444] font-extralight">
                Please select your preferred date and time
              </FormDescription>

              <FormMessage />
            </FormItem>
          )}
        />

        <EarButton
          inActive={isSubmitting || Date.now() - lastSubmissionTime < 30000}
          text={
            isSubmitting ? "Booking Your Appointment..." : "Book An Appointment"
          }
          click={form.handleSubmit(onSubmit)}
        />
      </form>
    </Form>
  );
}

export default AppointmentForm;
