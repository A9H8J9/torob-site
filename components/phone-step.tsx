"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const formSchema = z.object({
  phone: z
    .string()
    .regex(/^09\d{9}$/, "شماره موبایل معتبر نیست"),
});

type FormValues = z.infer<typeof formSchema>;

type Props = {
  onNext: (phone: string) => void;
};

export default function PhoneStep({ onNext }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    // API
    // await sendOtp(data.phone);

    onNext(data.phone);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
    >
      <p className="text-sm text-muted-foreground">
        شماره موبایل خود را وارد کنید.
      </p>

      <div>
        <Input
          dir="ltr"
          placeholder="09123456789"
          {...register("phone")}
        />

        {errors.phone && (
          <p className="mt-1 text-sm text-red-500">
            {errors.phone.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        className="w-full"
        disabled={isSubmitting}
      >
        ادامه
      </Button>
    </form>
  );
}