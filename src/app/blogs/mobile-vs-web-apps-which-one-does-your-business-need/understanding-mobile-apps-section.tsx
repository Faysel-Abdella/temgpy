import Image from "next/image";
import React from "react";

export default function UnderstandingMobileAppsSection() {
  return (
    <section
      id="understanding-mobile-apps"
      className="flex flex-col font-inter text-md md:text-lg leading-relaxed font-normal gap-4 md:gap-5">
      <p className="text-2xl md:text-3xl font-gilroy font-extrabold">
        Understanding Mobile Apps
      </p>
      <p className="text-description">
        Mobile apps are software applications designed specifically for
        smartphones and tablets. They are built for specific platforms, such as
        iOS or Android, and are distributed through official stores like the
        Apple App Store or Google Play Store.
      </p>
      <div className="flex flex-col gap-2.5 md:gap-3">
        <p className="text-description">
          There are two main types of mobile apps:
        </p>

        <ul className="flex list-disc pl-8 font-normal text-description flex-col  gap-2.5 md:gap-3">
          <li>
            <span className="text-black font-semibold">Native Apps:</span>{" "}
            Developed using platform-specific languages (Swift for iOS, Kotlin
            for Android), offering the highest performance and best user
            experience.
          </li>
          <li>
            <span className="text-black font-semibold">Hybrid Apps:</span> Built
            using web technologies (HTML, CSS, JavaScript) but wrapped in a
            native shell to run on both platforms, making development more
            cost-effective.
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-2.5 md:gap-3">
        <p className="text-xl font-semibold  md:text-2xl">
          Advantages of Mobile Apps
        </p>
        <ul className="flex list-disc pl-8 font-normal text-description flex-col  gap-2">
          <li>
            Superior performance as they are optimized for specific platforms.
          </li>
          <li>
            Access to device features like GPS, camera, and push notifications.
          </li>
          <li>Can function offline, making them more accessible.</li>
          <li>Enhanced security due to controlled environments.</li>
        </ul>
      </div>

      <div className="flex flex-col gap-2.5 md:gap-3">
        <p className="text-xl font-semibold  md:text-2xl">
          Disadvantages of Mobile Apps
        </p>
        <ul className="flex list-disc pl-8 font-normal text-description flex-col  gap-2">
          <li>
            Higher development costs due to separate apps for iOS and Android.
          </li>
          <li>Dependence on app stores for updates and approvals.</li>
          <li>Users must download and install them before access.</li>
        </ul>
      </div>
      <p className="text-description">
        Mobile apps are ideal for businesses that need high performance, deeper
        device integration, and a dedicated user base.
      </p>
      <Image
        className="w-full mt-2"
        src={"/blogs/mobile-show.png"}
        width={1000}
        height={1000}
        alt="Mobile Show"
      />
    </section>
  );
}
