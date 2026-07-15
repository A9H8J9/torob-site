"use client";

import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

import { ChevronRight } from "lucide-react";

import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  code: z
    .string()
    .length(6, "کد تایید باید ۶ رقم باشد"),
});

type FormValues = z.infer<typeof formSchema>;

type Props = {
  phone: string;
  onBack: () => void;
  onSuccess?: () => void;
};

export default function OtpStep({
  phone,
  onBack,
  onSuccess,
}: Props) {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      code: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    console.log({
      phone,
      code: data.code,
    });

    // await verifyOtp({
    //   phone,
    //   code: data.code,
    // });

  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      <Button
        type="button"
        variant="ghost"
        onClick={onBack}
        className="gap-1"
      >
        <ChevronRight size={18} />
        ویرایش شماره
      </Button>

      <div className="text-center">
        <p className="text-sm text-muted-foreground">
          کد تایید ارسال شده به
        </p>

        <p className="mt-1 font-medium">{phone}</p>
      </div>

      <Controller
        name="code"
        control={control}
        render={({ field }) => (
          <div className="flex flex-col items-center gap-2">
            <InputOTP
              maxLength={6}
              value={field.value}
                onChange={(value) => {
        field.onChange(value);

        if (value.length === 6) {
          handleSubmit(onSubmit)();
        }
      }}
            >
              <InputOTPGroup dir="ltr">
                {[0, 1, 2, 3, 4, 5].map((index) => (
                  <InputOTPSlot
                    key={index}
                    index={index}
                  />
                ))}
              </InputOTPGroup>
            </InputOTP>

            {errors.code && (
              <p className="text-sm text-red-500">
                {errors.code.message}
              </p>
            )}
          </div>
        )}
      />

      <Button
        type="submit"
        className="w-full"
        disabled={isSubmitting}
      >
        تایید
      </Button>
    </form>
  );
}