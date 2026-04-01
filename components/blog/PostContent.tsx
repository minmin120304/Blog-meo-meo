import { Fragment } from "react";

type PostContentProps = {
  content: string;
};

function renderBlock(block: string, index: number) {
  if (block.startsWith("### ")) {
    return (
      <h3 key={index} className="font-display text-2xl text-ink">
        {block.replace("### ", "")}
      </h3>
    );
  }

  if (block.startsWith("## ")) {
    return (
      <h2 key={index} className="font-display text-3xl text-ink">
        {block.replace("## ", "")}
      </h2>
    );
  }

  if (block.startsWith("# ")) {
    return (
      <h1 key={index} className="font-display text-4xl text-ink">
        {block.replace("# ", "")}
      </h1>
    );
  }

  if (block.startsWith("> ")) {
    return (
      <blockquote
        key={index}
        className="rounded-[1.75rem] border-l-4 border-primary-400 bg-primary-50 px-6 py-5 text-base italic leading-8 text-primary-900"
      >
        {block.replace(/^>\s?/gm, "")}
      </blockquote>
    );
  }

  if (block.startsWith("- ")) {
    return (
      <ul key={index} className="grid gap-3 pl-6 text-base leading-8 text-ink/75">
        {block.split("\n").map((line) => (
          <li key={line} className="list-disc">
            {line.replace("- ", "")}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <p key={index} className="text-base leading-8 text-ink/76">
      {block}
    </p>
  );
}

export default function PostContent({ content }: PostContentProps) {
  const blocks = content.split("\n\n").filter(Boolean);

  return (
    <div className="prose-blog grid gap-6">
      {blocks.map((block, index) => (
        <Fragment key={`${block.slice(0, 24)}-${index}`}>{renderBlock(block, index)}</Fragment>
      ))}
    </div>
  );
}
