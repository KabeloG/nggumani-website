"use server";

import prisma from "@/lib/prisma";

interface AppointmentFormData {
  fName: string;
  lName: string;
  phone: string;
  dateTime: string;
}

export async function createAppointment(formData: AppointmentFormData) {
  try {
    const { fName, lName, phone, dateTime } = formData;

    const appointment = await prisma.appointments.create({
      data: { fName, lName, phone, dateTime },
    });

    return { success: true, appointment };
  } catch (error) {
    return { success: false, error: "Failed to create an appointment" };
  }
}
