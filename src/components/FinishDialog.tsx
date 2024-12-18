"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

type FinishDialogProps = {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

const FinishDialog: React.FC<FinishDialogProps> = ({
  open,
  onClose,
  onConfirm,
}) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md p-4 rounded-lg shadow-lg bg-white">
        <DialogHeader>
          <DialogTitle className="text-lg font-bold text-gray-800 text-center">
            Are you sure you want to submit the quiz?
          </DialogTitle>
        </DialogHeader>
        <DialogFooter className="flex flex-col sm:flex-row justify-center sm:justify-end items-center gap-2 sm:gap-4 mt-4">
          <Button
            variant="secondary"
            onClick={onClose}
            className="w-full sm:w-auto"
          >
            No
          </Button>
          <Button
            variant="default"
            onClick={onConfirm}
            className="w-full sm:w-auto"
          >
            Yes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default FinishDialog;





