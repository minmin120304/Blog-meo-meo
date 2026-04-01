export default function PostLayout({
  children,
  comments
}: Readonly<{
  children: React.ReactNode;
  comments: React.ReactNode;
}>) {
  return (
    <div className="shell py-12 md:py-16">
      <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_24rem] xl:items-start">
        {children}
        {comments}
      </div>
    </div>
  );
}
