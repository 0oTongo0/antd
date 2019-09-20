import request from 'umi-request';
export async function queryTest(mobile: string) {
  console.log(mobile,"传入的mobile")
  return request(`/api/searchMusic?name=${mobile}`);
}