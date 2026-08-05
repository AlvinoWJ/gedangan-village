export interface PerangkatDesa {
  id: string;
  nama: string;
  jabatan: string;
  pendidikan: string;
}

export const perangkatSection = {
  heading: "Daftar Lengkap Perangkat Desa",
} as const;

export const perangkatDesa: PerangkatDesa[] = [
  {
    id: "1",
    nama: "Bambang Wiyono, S.Pd",
    jabatan: "Kepala Desa",
    pendidikan: "S1",
  },
  {
    id: "2",
    nama: "Dra. Sri Wahyuni",
    jabatan: "Sekretaris Desa",
    pendidikan: "S1",
  },
  {
    id: "3",
    nama: "Ahmad Fauzi",
    jabatan: "Kaur Tata Usaha & Umum",
    pendidikan: "SMA",
  },
  { id: "4", nama: "Siti Aminah", jabatan: "Kaur Keuangan", pendidikan: "S1" },
  {
    id: "5",
    nama: "Khoirul Anwar",
    jabatan: "Kaur Perencanaan",
    pendidikan: "S1",
  },
  {
    id: "6",
    nama: "Eko Prasetyo",
    jabatan: "Kasi Pemerintahan",
    pendidikan: "SMA",
  },
  {
    id: "7",
    nama: "Dwi Lestari",
    jabatan: "Kasi Kesejahteraan",
    pendidikan: "S1",
  },
  {
    id: "8",
    nama: "Hendra Gunawan",
    jabatan: "Kasi Pelayanan",
    pendidikan: "S1",
  },
  {
    id: "9",
    nama: "Suprapto Wibowo",
    jabatan: "Kepala Dusun Gedangan",
    pendidikan: "SMA",
  },
  {
    id: "10",
    nama: "Mulyono, S.Ag",
    jabatan: "Kepala Dusun Sumber",
    pendidikan: "S1",
  },
  {
    id: "11",
    nama: "Agus Santoso",
    jabatan: "Kepala Dusun Ngiwel",
    pendidikan: "SMA",
  },
];
