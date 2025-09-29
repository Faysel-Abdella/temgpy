import { FC } from "react";
import {
  Content,
  TableFieldBodyRow,
  TableFieldHeadRow,
} from "@prismicio/client";
import { PrismicTable, SliceComponentProps } from "@prismicio/react";

export type TableProps = SliceComponentProps<Content.TableSlice>;

interface TableContentProps {
  children: React.ReactNode;
}

const tableComponents = {
  table: ({ children }: TableContentProps) => (
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse border-2 border-[#858585] rounded-lg">
        {children}
      </table>
    </div>
  ),

  thead: ({ children }: TableContentProps) => (
    <thead className="overflow-hidden rounded-t-2xl  bg-[#9b9b9b]">
      {children}
    </thead>
  ),

  tbody: ({ children }: TableContentProps) => (
    <tbody className="text-xs md:text-md lg:text-lg bg-[#e4e4e4]">
      {children}
    </tbody>
  ),

  tr: ({ children }: TableContentProps) => {
    return <tr className={""}>{children}</tr>;
  },

  th: ({ children }: TableContentProps) => (
    <th className="border-2 border-[#7777779d] px-2 md:px-3 py-2 text-left font-semibold text-black">
      {children}
    </th>
  ),

  td: ({ children }: TableContentProps) => (
    <td className="border-2 border-[#7777779d] px-2 md:px-3 py-2 text-gray-900">
      {children}
    </td>
  ),
};

const Table: FC<TableProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicTable field={slice.primary.table} components={tableComponents} />
    </section>
  );
};

export default Table;
