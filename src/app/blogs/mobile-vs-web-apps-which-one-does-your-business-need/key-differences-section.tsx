import React from "react";

export default function KeyDifferencesSection() {
  return (
    <section
      id="key-differences"
      className="flex flex-col font-inter text-md md:text-lg leading-relaxed font-normal gap-4 md:gap-5">
      <p className="text-2xl md:text-3xl font-gilroy font-extrabold">
        Key Differences Between Mobile & Web Apps
      </p>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border-2  border-[#858585] rounded-lg ">
          <thead className="overflow-hidden rounded-t-2xl">
            <tr className="bg-[#9b9b9b] text-xs md:text-md lg:text-lg">
              <th className="border-2 border-[#777777e1] px-2 md:px-3 py-2 text-left font-semibold text-black">
                Feature
              </th>
              <th className="border-2 border-[#7777779d] px-2 md:px-3 py-2 text-left font-semibold text-black">
                Mobile Apps
              </th>
              <th className="border-2 border-[#7777779d] px-2 md:px-3 py-2 text-left font-semibold text-black">
                Web Apps
              </th>
            </tr>
          </thead>
          <tbody className="text-xs md:text-md lg:text-lg">
            <tr className="bg-[#e4e4e4] ">
              <td className="border-2 border-[#7777779d] px-2 md:px-3 py-2 font-semibold text-black">
                Installation
              </td>
              <td className="border-2 border-[#7777779d] px-2 md:px-3 py-2 text-gray-900">
                Required (App Store)
              </td>
              <td className="border-2 border-[#7777779d] px-2 md:px-3 py-2 text-gray-900">
                No installation needed
              </td>
            </tr>
            <tr className="bg-[#e4e4e4]">
              <td className="border-2 border-[#7777779d] px-2 md:px-3 py-2 font-semibold text-black">
                Performance
              </td>
              <td className="border-2 border-[#7777779d] px-2 md:px-3 py-2 text-gray-900">
                High (Optimized for OS)
              </td>
              <td className="border-2 border-[#7777779d] px-2 md:px-3 py-2 text-gray-900">
                Depends on browser & connection
              </td>
            </tr>
            <tr className="bg-[#e4e4e4]">
              <td className="border-2 border-[#7777779d] px-2 md:px-3 py-2 font-semibold text-black">
                Device Access
              </td>
              <td className="border-2 border-[#7777779d] px-2 md:px-3 py-2 text-gray-900">
                Full (Camera, GPS, etc.)
              </td>
              <td className="border-2 border-[#7777779d] px-2 md:px-3 py-2 text-gray-900">
                Limited
              </td>
            </tr>
            <tr className="bg-[#e4e4e4]">
              <td className="border-2 border-[#7777779d] px-2 md:px-3 py-2 font-semibold text-black">
                Offline Capability
              </td>
              <td className="border-2 border-[#7777779d] px-2 md:px-3 py-2 text-gray-900">
                Yes
              </td>
              <td className="border-2 border-[#7777779d] px-2 md:px-3 py-2 text-gray-900">
                Limited (PWAs offer some offline features)
              </td>
            </tr>
            <tr className="bg-[#e4e4e4]">
              <td className="border-2 border-[#7777779d] px-2 md:px-3 py-2 font-semibold text-black">
                Cost
              </td>
              <td className="border-2 border-[#7777779d] px-2 md:px-3 py-2 text-gray-900">
                Higher (separate development for iOS & Android)
              </td>
              <td className="border-2 border-[#7777779d] px-2 md:px-3 py-2 text-gray-900">
                Lower (single codebase for all platforms)
              </td>
            </tr>
            <tr className="bg-[#e4e4e4]">
              <td className="border-2 border-[#7777779d] px-2 md:px-3 py-2 font-semibold text-black">
                Updates
              </td>
              <td className="border-2 border-[#7777779d] px-2 md:px-3 py-2 text-gray-900">
                Users must update manually
              </td>
              <td className="border-2 border-[#7777779d] px-2 md:px-3 py-2 text-gray-900">
                Updates happen automatically
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* The Table Will Goes Here */}
      <p className="text-description">
        While mobile apps excel in performance and user engagement, web apps win
        in affordability and ease of maintenance.
      </p>
    </section>
  );
}
