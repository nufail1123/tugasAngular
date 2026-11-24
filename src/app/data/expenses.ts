// Data contoh (fiktif) untuk latihan. Nominal dalam Rupiah.

export type Category = 'makan' | 'transport' | 'belanja' | 'hiburan' | 'tagihan';

export interface Expense {
  id: number;
  title: string;
  date: string; // format 'YYYY-MM-DD'
  category: Category;
  amount: number;
  method: 'Tunai' | 'Debit' | 'E-wallet';
  note: string;
}

export const CATEGORIES: Category[] = ['makan', 'transport', 'belanja', 'hiburan', 'tagihan'];

export const BUDGET = 2_500_000;

export const EXPENSES: Expense[] = [
  {
    id: 1,
    title: 'Makan siang warteg',
    date: '2026-10-01',
    category: 'makan',
    amount: 18_000,
    method: 'Tunai',
    note: 'Nasi, tempe, dan es teh',
  },
  {
    id: 2,
    title: 'Langganan internet',
    date: '2026-10-02',
    category: 'tagihan',
    amount: 350_000,
    method: 'Debit',
    note: 'Paket bulanan',
  },
  {
    id: 3,
    title: 'Ojek ke kampus',
    date: '2026-10-03',
    category: 'transport',
    amount: 24_000,
    method: 'E-wallet',
    note: 'Berangkat kuliah pagi',
  },
  {
    id: 4,
    title: 'Buku catatan dan pulpen',
    date: '2026-10-05',
    category: 'belanja',
    amount: 67_000,
    method: 'Tunai',
    note: 'Untuk catatan kuliah',
  },
  {
    id: 5,
    title: 'Nonton bioskop',
    date: '2026-10-08',
    category: 'hiburan',
    amount: 55_000,
    method: 'E-wallet',
    note: 'Film akhir pekan',
  },
  {
    id: 6,
    title: 'Belanja bulanan',
    date: '2026-10-10',
    category: 'belanja',
    amount: 485_000,
    method: 'Debit',
    note: 'Sabun, beras, dan mi instan',
  },
  {
    id: 7,
    title: 'Makan malam bareng teman',
    date: '2026-10-12',
    category: 'makan',
    amount: 120_000,
    method: 'E-wallet',
    note: 'Patungan berempat',
  },
  {
    id: 8,
    title: 'Isi bensin',
    date: '2026-10-15',
    category: 'transport',
    amount: 150_000,
    method: 'Tunai',
    note: 'Pertalite 10 liter',
  },
  {
    id: 9,
    title: 'Tagihan listrik',
    date: '2026-10-17',
    category: 'tagihan',
    amount: 275_000,
    method: 'Debit',
    note: 'Token listrik',
  },
  {
    id: 10,
    title: 'Langganan streaming',
    date: '2026-10-20',
    category: 'hiburan',
    amount: 54_000,
    method: 'E-wallet',
    note: 'Paket bulanan',
  },
  {
    id: 11,
    title: 'Servis motor',
    date: '2026-10-24',
    category: 'transport',
    amount: 230_000,
    method: 'Tunai',
    note: 'Ganti oli dan kampas rem',
  },
  {
    id: 12,
    title: 'Kado ulang tahun',
    date: '2026-10-26',
    category: 'belanja',
    amount: 150_000,
    method: 'Debit',
    note: 'Untuk sepupu',
  },
];
