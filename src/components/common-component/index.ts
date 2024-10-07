import Button from "./button";
import Container from "./container";
import SectionCotainer from "./container/section-container";
import EmptyTable from "./empty-table";
import CheckboxField from "./form/checkbox";
import DatepickerField from "./form/datepicker";
import DatepickerSearch from "./form/datepicker/DatepickerSearch";
import DatepickerRangeSearch from "./form/datepicker/DaterpickerRangeSearch";
import InputField from "./form/input";
import InputSearch from "./form/input/InputSearch";
import InputSearchColTable from "./form/input/InputSearchColTable";
import Radio from "./form/radio";
import RadioGroup from "./form/radio-group";
import SelectField from "./form/select";
import SelectSearch from "./form/select/SelectSearch";
import SelectSearchTable from "./form/select/SelectSearchTable";
import Pagination from "./pagination";
import RenderOrderStatus from "./stauts/RenderOrderStatus";
import RenderPayStatus from "./stauts/RenderPayStatus";
import Table from "./table";
import TitleSection from "./title-section";

export const CommonComponent = {
  Container,
  SectionCotainer,
  TitleSection,
  Button,

  // Form
  Radio,
  RadioGroup,
  CheckboxField,
  InputField,
  SelectField,
  DatepickerField,
  // Search
  InputSearch,
  InputSearchColTable,
  SelectSearch,
  SelectSearchTable,
  DatepickerRangeSearch,
  DatepickerSearch,

  //table
  Pagination,
  EmptyTable,
  Table,
  RenderOrderStatus,
  RenderPayStatus,
};
