import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from '../ui/collapsible'

export interface collapsibleProps {}
// @ts-ignore
export function CustomCollapsible() {
  return (
    <Collapsible className="border-t mt-2 ">
      <CollapsibleTrigger>
        <div className="flex p-1 mt-1 items-center justify-around gap-2">
          <Collapsible>
            <CollapsibleTrigger>Description</CollapsibleTrigger>
            <CollapsibleContent>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
              ut ex unde, explicabo eum expedita possimus modi vel repellendus
              alias est error ullam voluptate harum! Porro magni ipsum ea cum?
            </CollapsibleContent>
          </Collapsible>
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent>hey</CollapsibleContent>
    </Collapsible>
  )
}
