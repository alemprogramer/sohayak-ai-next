"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type Props = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

type FormData = {
  message: string;
  prompt: string;
};

export function TanningDialog({ open, setOpen }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
    setOpen(false); // Close dialog
    reset(); // Optional: reset form
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[600px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <div className="grid gap-3">
              <Label htmlFor="message">First Message</Label>
              <Input
                id="message"
                placeholder="Type your first message."
                {...register("message", { required: true })}
              />
              {errors.message && (
                <p className="text-sm text-red-500">Message is required.</p>
              )}
            </div>

            <div className="grid gap-3">
              <Label htmlFor="prompt">System Prompt</Label>
              <Textarea
                id="prompt"
                placeholder="System Prompt."
                className="h-[300px] w-full"
                {...register("prompt", { required: true })}
              />
              {errors.prompt && (
                <p className="text-sm text-red-500">Prompt is required.</p>
              )}
            </div>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
