'use server'

import HttpClient from "@/lib/fetch"

const submit = async ({data}: {data: any}) => {
    const http = new HttpClient();
    const response = await http.post("/api/PartnerApplications", data);
  return response;
}

export default submit
