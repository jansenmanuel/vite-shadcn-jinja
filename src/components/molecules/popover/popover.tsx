import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";

export function PopoverComponent() {
	return (
		<Popover>
			<PopoverTrigger>Open</PopoverTrigger>
			<PopoverContent>Place content for the popover here.</PopoverContent>
		</Popover>
	);
}
