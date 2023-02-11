interface PointResponse {
  recipientUserId: string;
  dateQueue: Date;
  linkedIds: {
    patronageActivityId?: string;
  }
}

export default PointResponse;