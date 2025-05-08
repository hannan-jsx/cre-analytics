import { Delete, Get } from "@/Axios/AxiosFunctions";
import { Button } from "@/components/Core/Button";
import SearchInput from "@/components/Core/SearchInput";
import SideBarSkeleton from "@/components/Core/SideBarSkeleton";
import TableStructure from "@/components/Core/TableStructure";
import { BaseURL } from "@/config/apiUrl";
import useDebounce from "@/CustomHooks/useDebounce";
import { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { MdAdd, MdEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useSelector } from "react-redux";
import classes from "./Report.module.css";
import AreYouSureModal from "@/modals/AreYouSureModal";
import { useNavigate } from "react-router-dom";
const Report = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalRecord, setTotalRecord] = useState(30);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(tableData);
  const debounce = useDebounce(search, 500);
  const [modalShow, setModalShow] = useState(false);
  const { access_token } = useSelector((state) => state?.authReducer);
  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate();
  const getData = async (_page = page) => {
    setLoading("get-data");
    const apiUrl = BaseURL(`report?search=${search}&page=${_page}`);
    const response = await Get(apiUrl, access_token);
    if (response) {
      setData(response?.data?.data?.reports);
      setTotalRecord(response?.data?.data?.totalRecord);
    }
    setLoading(false);
  };

  const handleDelete = async () => {
    return;
    setLoading("delete");
    const apiUrl = BaseURL(`report/${selectedItem._id}`);
    const response = await Delete(apiUrl, access_token);
    if (response) {
      setData((prev) => prev.filter((item) => item._id !== selectedItem._id));
      setTotalRecord(totalRecord - 1);
      setModalShow(false);
    }
    setLoading(false);
  };

  useEffect(() => {
    return;
    getData(1);
  }, [debounce]);
  return (
    <SideBarSkeleton headerHeading={"Report"}>
      <div className={classes.search}>
        <SearchInput
          setter={setSearch}
          value={search}
          placeholder="Search By Name"
        />
      </div>
      <TableStructure
        headerHandlers={{
          add: (
            <Button
              label={"Start new Analysis"}
              variant="bordered"
              leftIcon={<MdAdd size={20} />}
              onClick={() => navigate("/report/add")}
            />
          ),
        }}
        tableContent={data.map((item) => ({
          ...item,
          action: (
            <div className={classes.action}>
              <MdEdit
                size={16}
                title="Edit"
                onClick={() => navigate(`/report/${item._id}`)}
              />
              <FaEye
                size={16}
                title="View"
                onClick={() => navigate(`/report/${item._id}?type=view`)}
              />
              <RiDeleteBin6Line
                size={16}
                title="Delete"
                onClick={() => {
                  setModalShow(true);
                  setSelectedItem(item);
                }}
              />
            </div>
          ),
        }))}
        page={page}
        setPage={setPage}
        totalRecord={totalRecord}
        isLoading={loading === "get-data"}
        tableHeaders={tableHeader}
      />
      {modalShow && (
        <AreYouSureModal
          setShow={setModalShow}
          show={modalShow}
          onClick={handleDelete}
          isApiCall={loading === "delete"}
          subTitle="Once you delete this report can’t be recovered"
        />
      )}
    </SideBarSkeleton>
  );
};

export default Report;
const tableHeader = [
  {
    label: "Name",
    value: "name",
  },
  {
    label: "Asking Price",
    value: "askingPrice",
  },
  {
    label: "Offer Percent",
    value: "offerPercent",
  },
  {
    label: "LTV Percent",
    value: "LTVPercent",
  },
  {
    label: "Loan Interest (%)	",
    value: "loanInterest",
    dataStyle: {
      width: "15%",
    },
  },
  {
    label: "Long Term",
    value: "longTerm",
  },
  {
    label: "Offer Date",
    value: "offerDate",
  },
  {
    label: "",
    value: "action",
  },
];
const tableData = Array(40)
  .fill("")
  .map((_, index) => ({
    name: "John Doe",
    askingPrice: "12345",
    offerPercent: "12%",
    LTVPercent: "12%",
    loanInterest: "12%",
    longTerm: "12%",
    offerDate: "12/12/12",
    _id: index + 1,
  }));
