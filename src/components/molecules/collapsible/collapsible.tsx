import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";

export function CollapsibleComponent() {
	return (
		<Collapsible>
			<CollapsibleTrigger>Can I use this in my project?</CollapsibleTrigger>
			<CollapsibleContent>
				Yes. Free to use for personal and commercial projects. No attribution
				required.
			</CollapsibleContent>
		</Collapsible>
	);
}
