type Dragon = {
  createdAt: string;
  name: string;
  type: string;
  histories?: string[];
  id: string;
  imageUrl?: string;
};

export interface DragonPayload {
  name: string;
  type: string;
  imageUrl?: string;
  histories: string[];
}

export default Dragon;
