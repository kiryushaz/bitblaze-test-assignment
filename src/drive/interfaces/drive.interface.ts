export interface Drive {
  name: string,
  size: string,
  label: string | null,
  fstype: string | null,
  mountpoint: string | null,
  children?: Drive[]
}