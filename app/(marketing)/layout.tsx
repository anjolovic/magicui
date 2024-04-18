import { SiteBanner } from "@/components/site-banner";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getCurrentUser } from "@/lib/session";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  const user = await getCurrentUser();

  return (
    <>
      <SiteBanner />
      <SiteHeader user={user} />
      <main className="flex-1">{children}</main>
      <SiteFooter />

      {/* Top Ellipse Gradient */}
      <div className="pointer-events-none absolute inset-0 h-screen bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,189,122,0.2),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.5),rgba(255,255,255,0))]" />

      {/* Grid Pattern */}
      {/* <GridPattern
        width={80}
        height={80}
        x={-1}
        y={-1}
        className={cn(
          "absolute inset-0 h-screen w-screen fill-black/[.06] stroke-black/[.06] dark:fill-white/[.06] dark:stroke-white/[.06]",
          "-z-50 [mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]",
          "inset-x-0 -top-[1rem] -z-50 h-[80%] skew-y-12",
        )}
      /> */}

      {/* Linear Gradient */}
      {/* <LinearGradient
        className="h-screen w-screen"
        from="rgba(120,119,198,0.1)"
        to="rgba(0,0,0,0.0)"
        direction="bottom right"
      /> */}
    </>
  );
}
