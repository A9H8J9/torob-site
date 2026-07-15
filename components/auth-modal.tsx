"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import PhoneStep from "./phone-step";
import OtpStep from "./otp-step";


type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function AuthModal({
  open,
  onOpenChange,
}: Props) {
  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [phone, setPhone] = useState("");

  return (
    <Dialog
      open={open}
      onOpenChange={(value) => {
        onOpenChange(value);

        if (!value) {
          setStep("phone");
          setPhone("");
        }
      }}
    >
      <DialogContent className="sm:max-w-md">

        <DialogHeader>
          <DialogTitle>
            {step === "phone"
              ? "ورود یا ثبت‌نام"
              : "تایید شماره"}
          </DialogTitle>
        </DialogHeader>

       {step === "phone" ? (
  <PhoneStep
    onNext={(phone) => {
      setPhone(phone);
      setStep("otp");
    }}
  />
) : (
  <OtpStep
    phone={phone}
    onBack={() => setStep("phone")}
  />
)}

      </DialogContent>
    </Dialog>
  );
}