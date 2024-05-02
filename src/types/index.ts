export interface News {
  author: string;
  createdAt: string;
  id: string;
  title: string;
  updatedAt: string;
  tags: string[];
}

export interface API_RESPONSE {
  author: string;
  created_at: string;
  objectID: string;
  title: string;
  updated_at: string;
  _tags: string[];
}

export type LoadingTypes = "loading" | "error" | "success" | null;


export interface ITEM_DETAILS_TYPE {
  author: string;
  children?: (ChildrenEntity)[] | null;
  created_at: string;
  created_at_i: number;
  id: number;
  options?: (null)[] | null;
  parent_id?: null;
  points: number;
  story_id: number;
  text?: null;
  title: string;
  type: string;
  url: string;
}
export interface ChildrenEntity {
  author: string;
  children?: (ChildrenEntity1 | null)[] | null;
  created_at: string;
  created_at_i: number;
  id: number;
  options?: (null)[] | null;
  parent_id: number;
  points?: null;
  story_id: number;
  text: string;
  title?: null;
  type: string;
  url?: null;
}
export interface ChildrenEntity1 {
  author: string;
  children?: (ChildrenEntity2 | null)[] | null;
  created_at: string;
  created_at_i: number;
  id: number;
  options?: (null)[] | null;
  parent_id: number;
  points?: null;
  story_id: number;
  text: string;
  title?: null;
  type: string;
  url?: null;
}
export interface ChildrenEntity2 {
  author: string;
  children?: (ChildrenEntity3 | null)[] | null;
  created_at: string;
  created_at_i: number;
  id: number;
  options?: (null)[] | null;
  parent_id: number;
  points?: null;
  story_id: number;
  text: string;
  title?: null;
  type: string;
  url?: null;
}
export interface ChildrenEntity3 {
  author: string;
  children?: (ChildrenEntity4 | null)[] | null;
  created_at: string;
  created_at_i: number;
  id: number;
  options?: (null)[] | null;
  parent_id: number;
  points?: null;
  story_id: number;
  text: string;
  title?: null;
  type: string;
  url?: null;
}
export interface ChildrenEntity4 {
  author: string;
  children?: (ChildrenEntity5 | null)[] | null;
  created_at: string;
  created_at_i: number;
  id: number;
  options?: (null)[] | null;
  parent_id: number;
  points?: null;
  story_id: number;
  text: string;
  title?: null;
  type: string;
  url?: null;
}
export interface ChildrenEntity5 {
  author: string;
  children?: (ChildrenEntity6 | null)[] | null;
  created_at: string;
  created_at_i: number;
  id: number;
  options?: (null)[] | null;
  parent_id: number;
  points?: null;
  story_id: number;
  text: string;
  title?: null;
  type: string;
  url?: null;
}
export interface ChildrenEntity6 {
  author: string;
  children?: (ChildrenEntity7 | null)[] | null;
  created_at: string;
  created_at_i: number;
  id: number;
  options?: (null)[] | null;
  parent_id: number;
  points?: null;
  story_id: number;
  text: string;
  title?: null;
  type: string;
  url?: null;
}
export interface ChildrenEntity7 {
  author: string;
  children?: (ChildrenEntity8 | null)[] | null;
  created_at: string;
  created_at_i: number;
  id: number;
  options?: (null)[] | null;
  parent_id: number;
  points?: null;
  story_id: number;
  text: string;
  title?: null;
  type: string;
  url?: null;
}
export interface ChildrenEntity8 {
  author: string;
  children?: (ChildrenEntity9 | null)[] | null;
  created_at: string;
  created_at_i: number;
  id: number;
  options?: (null)[] | null;
  parent_id: number;
  points?: null;
  story_id: number;
  text: string;
  title?: null;
  type: string;
  url?: null;
}
export interface ChildrenEntity9 {
  author: string;
  children?: (ChildrenEntity10 | null)[] | null;
  created_at: string;
  created_at_i: number;
  id: number;
  options?: (null)[] | null;
  parent_id: number;
  points?: null;
  story_id: number;
  text: string;
  title?: null;
  type: string;
  url?: null;
}
export interface ChildrenEntity10 {
  author: string;
  children?: (null)[] | null;
  created_at: string;
  created_at_i: number;
  id: number;
  options?: (null)[] | null;
  parent_id: number;
  points?: null;
  story_id: number;
  text: string;
  title?: null;
  type: string;
  url?: null;
}
