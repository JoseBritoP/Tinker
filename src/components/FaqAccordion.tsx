import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQAccordionProps {
  items: {
    question: string;
    answer: string;
  }[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  return (
    <Accordion type="single" collapsible className="flex flex-col gap-y-4">
      {items.map((item, i) => (
        <AccordionItem
          key={i}
          value={`item-${i}`}
          className="bg-[#E3F1FF] p-[16px] rounded-[8px]"
        >
          <AccordionTrigger className="flex w-full items-center justify-between">
            <p className="text-left font-medium text-[#172026] lg:text-[18px]">
              {item.question}
            </p>
           
          </AccordionTrigger>
          <AccordionContent>
            <p className="pt-2 text-[#36485C]">{item.answer}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
