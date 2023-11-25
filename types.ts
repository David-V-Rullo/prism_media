export interface BillboardFormData {
  market: string;
  vendor: string;
  mediaType: string;
  unitNumber: string;
  tabId: string;
  numberOfUnits: number;
  description: string;
  face: string;
  size: string;
  pixels: string;
  illuminated: boolean;
  weeklyEOIs: number;
  fourWeekImp: number;
  latitude: number;
  longitude: number;
  availableTiming?: string;
  fourWeekRateCard: number;
  fourWeekNegotiatedCost: number;
  installsIncluded?: number;
  additionalInstallCost?: number;
  productionCost?: number;
  shippingAddress?: string;
  artworkDeadline?: string;
  ownerId: number;
}
