export const classCommon = {
  navTop: "nav-top",
  header: "header",
};

export const secretKeyEncrypt = "crm";

export const indexElement = {
  loading: 103,
  popup: 102,
  header: 100,
  overlay: 101,
  layoutTop: 10,
  layoutContent: 20,
  pushUp: 103,
  sidebar: 100,
};

export const device = () => {
  const width = screen.width;

  return {
    isMobile: width < 768,
    isTablet: width > 1024,
    isDesktop: width > 1200,
  };
};

export const breakpoints = {
  xs: 0,
  sm: 600,
  md: 768,
  lg: 984,
  xl: 1240,
};

export const validateQuantityEsim = {
  totalWholeSale: 1000,
  totalRetail: 50,
};

export const maxLengthFields = {
  default: 200,
  quantityRetail: 2,
  quantityWholesale: 4,
  iccid: 30,
  phoneNumber: 12,
  orderCodeSkyfi: 12,
  email: 12,
};
