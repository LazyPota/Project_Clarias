import NavbarClient from "@/components/navbar";

export default function RootTemplate({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <NavbarClient />
      <div className="pt-[64px] *:min-h-[calc(100dvh-115px)]">
        {children}
      </div>
    </>
  );
}
