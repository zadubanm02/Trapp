export interface Calendar {
  firstDay: Date;
  lastDay: Date;
  userId: string;
}

export interface FirebaseCalendar {
  userId: string;
  day: Date;
  value: number;
}

export interface ValueDay {
  value: number;
  day: Date;
  userId: string;
}

export interface Friend {
  userId: string;
  displayName: string;
  value: number;
  email: string;
}
