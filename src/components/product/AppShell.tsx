import {
  appActionNav,
  appHomeNav,
  appManagementNav,
  resolveActiveNav,
} from "@/data/app-ui";
import { cn } from "@/lib/utils";
import Image from "next/image";
import {
  BarChart3,
  BedDouble,
  Bell,
  Building2,
  ChevronDown,
  Globe,
  History,
  LayoutGrid,
  LogOut,
  Menu,
  Package,
  Percent,
  User,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const actionIcons: Record<string, LucideIcon> = {
  history: History,
  promotion: Percent,
  maintenance: Wrench,
  "financial-report": BarChart3,
};

const managementIcons: Record<string, LucideIcon> = {
  reservation: LayoutGrid,
  building: Building2,
  room: BedDouble,
  "room-type": LayoutGrid,
  service: Package,
  item: Package,
  "extra-bed": BedDouble,
  package: Package,
  "guest-report": User,
};

function NavItem({
  id,
  label,
  active,
  icon: Icon,
}: {
  id: string;
  label: string;
  active: string;
  icon?: LucideIcon;
}) {
  const isActive = active === id;
  return (
    <div
      className={cn(
        "flex items-center gap-2.5 rounded-lg px-3 py-2 text-[12px] transition-colors",
        isActive ? "bg-brand font-medium text-white" : "text-charcoal/75 hover:bg-white/70",
      )}
    >
      {Icon && <Icon className="h-4 w-4 shrink-0 opacity-80" strokeWidth={1.75} />}
      <span className="truncate">{label}</span>
    </div>
  );
}

export function AppShell({
  active,
  title,
  children,
  compact,
}: {
  active: string;
  title: string;
  children: React.ReactNode;
  compact?: boolean;
}) {
  const navActive = resolveActiveNav(active);

  return (
    <div className="sovtels-app-shell overflow-hidden text-left text-charcoal">
      <div className="flex min-h-[340px]">
        <aside className="hidden w-[210px] shrink-0 flex-col border-r border-[#e8ece6] bg-[#fbfbfa] sm:flex">
          <div className="flex items-center gap-2.5 border-b border-[#e8ece6] px-4 py-4">
            <span className="relative h-8 w-8 overflow-hidden rounded-md bg-white ring-1 ring-line">
              <Image src="/images/logo.png" alt="" fill className="object-contain p-0.5" sizes="32px" />
            </span>
            <span className="text-[15px] font-semibold tracking-[0.14em] text-charcoal">SOVTELS</span>
          </div>

          <nav className="flex-1 space-y-4 overflow-hidden p-3">
            <NavItem id={appHomeNav.id} label={appHomeNav.label} active={navActive} icon={LayoutGrid} />

            <div>
              <p className="mb-1.5 px-3 text-[10px] font-semibold tracking-[0.14em] text-muted uppercase">
                {appActionNav.title}
              </p>
              <div className="space-y-0.5">
                {appActionNav.items.map((item) => (
                  <NavItem
                    key={item.id}
                    id={item.id}
                    label={item.label}
                    active={navActive}
                    icon={actionIcons[item.id]}
                  />
                ))}
              </div>
            </div>

            <div>
              <p className="mb-1.5 px-3 text-[10px] font-semibold tracking-[0.14em] text-muted uppercase">
                {appManagementNav.title}
              </p>
              <div className="space-y-0.5">
                {appManagementNav.items.map((item) => (
                  <NavItem
                    key={item.id}
                    id={item.id}
                    label={item.label}
                    active={navActive}
                    icon={managementIcons[item.id]}
                  />
                ))}
              </div>
            </div>
          </nav>

          <div className="border-t border-[#e8ece6] p-3">
            <div className="flex items-center gap-2.5 rounded-lg bg-white px-2.5 py-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand/15 text-brand">
                <User className="h-4 w-4" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[11px] font-medium text-charcoal">premium user</p>
                <p className="truncate text-[10px] text-muted">Owner · admin premium</p>
              </div>
              <LogOut className="h-4 w-4 shrink-0 text-muted" aria-hidden />
            </div>
          </div>
        </aside>

        <div className="min-w-0 flex-1 bg-[#f3f5f2]">
          <div className="flex items-center justify-between border-b border-[#e8ece6] bg-white px-4 py-3">
            <div className="flex items-center gap-3">
              <Menu className="h-5 w-5 text-muted sm:hidden" aria-hidden />
              <h2 className="text-xl font-semibold text-charcoal">{title}</h2>
            </div>
            <div className="flex items-center gap-2">
              <span className="hidden items-center gap-1.5 rounded-full border border-line bg-white px-2.5 py-1 text-[10px] text-muted sm:inline-flex">
                <Building2 className="h-3.5 w-3.5 text-brand" />
                admin premium
              </span>
              <span className="relative flex h-8 w-8 items-center justify-center rounded-lg border border-line bg-white">
                <Bell className="h-4 w-4 text-muted" />
                <span className="absolute -top-1 -right-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-brand px-1 text-[9px] font-bold text-white">
                  5
                </span>
              </span>
              <span className="hidden items-center gap-1 rounded-lg border border-line bg-white px-2 py-1.5 text-[10px] text-muted sm:inline-flex">
                <Globe className="h-3.5 w-3.5" />
                English
                <ChevronDown className="h-3 w-3" />
              </span>
            </div>
          </div>

          <div className={cn("p-4", compact && "p-3")}>{children}</div>
        </div>
      </div>
    </div>
  );
}

export function StatusDot({ status }: { status: string }) {
  const labels: Record<string, string> = {
    available: "Avail",
    occupied: "Occ",
    reserved: "Rsvd",
    cleaning: "Clean",
    maintenance: "Maint",
    ready: "Ready",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm px-1.5 py-0.5 text-[9px] font-medium tracking-wide uppercase",
        `status-${status}`,
      )}
    >
      {labels[status] ?? status}
    </span>
  );
}
