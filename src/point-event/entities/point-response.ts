interface BitResponse {
  recipientUserId: string;
  dateQueue: Date;
  linkedIds: {
    patronageActivityId?: string;
  }
}

export default BitResponse;