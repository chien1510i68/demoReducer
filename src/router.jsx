import { createBrowserRouter } from "react-router-dom";
import PageETest from "./Page/PageETest/PageETest";
import Login from "./Page/Login/Login";
import TableCustomer from "./Componets/Table/User/Customer/TableCustomer";
import TableUser from "./Componets/Table/User/TableUser";
import TableStaff from "./Componets/Table/User/Staff/TableStaff";
import EduProgram from "./Componets/Table/EducationProgram/EduProgram";
import Register from "./Page/Register/Register";
import TableNews from "./Componets/Table/News/News";
import DetailUser from "./Componets/Details/DetailUser/DetailUser";
import ExamSchedule from "./Componets/Table/ExamSchedule/ExamSchedule";
import Document from "./Componets/Table/Document/Document";
import DetaiNews from "./Componets/Details/DetailNews/DetaiNews";
import PageMocktest from "./Page/MockTest/PageMockTest";
import CKEditor5 from "./Componets/CKEditor/CKEditor";
import CreateQuestion from "./Page/MockTest/CreateQuestion";
import Contest from "./Page/MockTest/Contest";

// import ExampleCKEditor from "../src/ckeditor5/src/AddEditNews/AddEditNews";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    // element: <CKEditor5 />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/adminpage",
    element: <PageETest />,
    children: [
      {
        path: "user",
        element: <TableUser />,
        children: [
          {
            path: "detailuser/:detailuserId",
            element: <DetailUser />,
          },
        ],
      },
      {
        path: "staff",
        element: <TableStaff />,
      },
      {
        path: "customer",
        element: <TableCustomer />,
      },
      {
        path: "eduprogram",
        element: <EduProgram />,
        children: [
          {
            path: "detaileduprogram/:detaileduprogramId",
          },
        ],
      },
      {
        path: "news",
        element: <TableNews />,
        children: [
          {
            path: "detailnews/:detailnewsId",
            element: <DetaiNews />,
          },
        ],
      },
      {
        path: "examschedule",
        element: <ExamSchedule />,
      },
      {
        path: "document",
        element: <Document />,
      },
      {
        path: "mocktest",
        element: <PageMocktest />,
      },
      {
        path: "contest",
        element: <Contest />,
      
      },
      {
        path: "create-question",
        element: <CreateQuestion />,
      },
    ],
  },
]);
