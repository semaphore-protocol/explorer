import { cn } from "@/lib/utils";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import React, { forwardRef } from "react";

const Accordion = AccordionPrimitive.Root;

type AccordionItemType = {
  children: React.ReactNode;
  className?: string;
  value: string;
};

const AccordionItem = forwardRef<HTMLDivElement, AccordionItemType>(
  function AccordionItem({ children, className, ...props }, forwardedRef) {
    return (
      <AccordionPrimitive.Item
        className={cn(
          "mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10",
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        {children}
      </AccordionPrimitive.Item>
    );
  }
);

type AccordionTriggerType = {
  children: React.ReactNode;
  className?: string;
};

const AccordionTrigger = forwardRef<HTMLButtonElement, AccordionTriggerType>(
  function AccordionTrigger({ children, className, ...props }, forwardedRef) {
    return (
      <AccordionPrimitive.Header className="flex">
        <AccordionPrimitive.Trigger
          className={cn(
            "group flex h-[45px] flex-1 cursor-default items-center justify-between bg-slate-800 px-5 text-[15px] leading-none text-slate-300 outline-none",
            className
          )}
          {...props}
          ref={forwardedRef}
        >
          {children}
          <ChevronDown
            className="ease-[cubic-bezier(0.87,_0,_0.13,_1)] text-slate-300 transition-transform duration-300 group-data-[state=open]:rotate-180"
            aria-hidden
          />
        </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>
    );
  }
);

type AccordionContentType = {
  children: React.ReactNode;
  className?: string;
};

const AccordionContent = forwardRef<HTMLDivElement, AccordionContentType>(
  function AccordionContent({ children, className, ...props }, forwardedRef) {
    return (
      <AccordionPrimitive.Content
        className={cn(
          "overflow-auto bg-slate-800 text-[15px] text-slate-300 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        <div className="px-5 py-[15px]">{children}</div>
      </AccordionPrimitive.Content>
    );
  }
);

AccordionItem.displayName = "AccordionItem";
AccordionTrigger.displayName = "AccordionTrigger";
AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
