"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import YouTubeGrid from "./youtube-grid";

const ACCENT = "#C6FF3A";

type ExamplesDialogProps = {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  planName: string;
  price: string;
  videoIds: string[];
};

export function ExamplesDialog({
  open,
  onOpenChange,
  planName,
  price,
  videoIds,
}: ExamplesDialogProps) {
  return (
    <Dialog onOpenChange={onOpenChange} open={open}>
      <DialogContent className="max-w-[95vw] border-neutral-800 bg-[#0b0b0b] p-0 text-white sm:rounded-2xl xl:max-w-[1280px]">
        <div className="border-neutral-900 border-b bg-neutral-900/50 px-5 py-4">
          <DialogHeader className="space-y-1">
            <DialogTitle
              className="font-semibold text-base"
              style={{ color: ACCENT }}
            >
              {planName}
            </DialogTitle>
            <DialogDescription className="text-neutral-400 text-sm">
              Pricing: {price}
            </DialogDescription>
          </DialogHeader>
        </div>
        <div className="max-h-[80vh] overflow-auto px-5 py-5 lg:px-6 lg:py-6">
          <YouTubeGrid videoIds={videoIds} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
