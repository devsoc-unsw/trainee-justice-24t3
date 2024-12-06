import Tag from "@/components/Tag";

function TagGroup() {
  return (
    <>
      <div className="relative w-full">
        <div className="relative">
          <div
            className="flex flex-wrap gap-2 bg-[hsl(50,21%,95%)] border-[0.5px] border-gray-400 w-full p-3 font-spartan leading-tight"
          >
            {/* Tags go here!!! */}
            <Tag>hi</Tag>
            <Tag>hello</Tag>
            <Tag>yo</Tag>
            <Tag>😀😀😀</Tag>
            <Tag>💀💀💀</Tag>
            <Tag>hi</Tag>
            <Tag>hello</Tag>
            <Tag>yo</Tag>
            <Tag>😀😀😀</Tag>
            <Tag>💀💀💀</Tag>
            <Tag>hi</Tag>
            <Tag>hello</Tag>
            <Tag>yo</Tag>
            <Tag>😀😀😀</Tag>
            <Tag>💀💀💀</Tag><Tag>hi</Tag>
            <Tag>hello</Tag>
            <Tag>yo</Tag>
            <Tag>😀😀😀</Tag>
            <Tag>💀💀💀</Tag>
            <Tag>hi</Tag>
            <Tag>hello</Tag>
            <Tag>yo</Tag>
            <Tag>😀😀😀</Tag>
            <Tag>💀💀💀</Tag>
          </div>
          <div
            className="bg-[hsl(50,21%,95%)] px-2 text-[12px] absolute left-2 -top-2 font-spartan text-gray-500"
          >
            Tags
          </div>
        </div>
      </div>
    </>
  );
}

export default TagGroup;
