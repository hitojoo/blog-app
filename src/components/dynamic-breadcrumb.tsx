"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface DynamicBreadcrumbProps {
  homeLabel?: string;
  className?: string;
}

export const DynamicBreadcrumb: React.FC<DynamicBreadcrumbProps> = ({
  homeLabel = "Home",
  className = "",
}) => {
  const pathname = usePathname();

  // パスが / のみの場合は何も表示しない
  if (pathname === "/") {
    return null;
  }

  // パスを分割して各部分をリンクに変換
  const pathSegments = pathname.split("/").filter(Boolean);

  // 各セグメントのパスとラベルを生成
  const breadcrumbItems = pathSegments.map((segment, index) => {
    const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
    const label =
      segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " ");

    return {
      href,
      label,
    };
  });

  // ホームを先頭に追加
  breadcrumbItems.unshift({
    href: "/",
    label: homeLabel,
  });

  return (
    <Breadcrumb className={className}>
      <BreadcrumbList>
        {breadcrumbItems.map((item, index) => {
          const isLast = index === breadcrumbItems.length - 1;

          return (
            <React.Fragment key={item.href}>
              <BreadcrumbItem>
                {isLast ? (
                  <span className="font-medium">{item.label}</span>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link href={item.href} className="flex items-center">
                      {index === 0 && <Home className="h-4 w-4 mr-1" />}
                      {item.label}
                    </Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {!isLast && <BreadcrumbSeparator />}
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
