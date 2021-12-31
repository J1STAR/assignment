const END_POINT = 'https://frontend-assignments.s3.ap-northeast-2.amazonaws.com/job_postings.json';

/**
 * API 요청
 */
export const request = async (url = '', options = {}) => {
  try {
    const fullUrl = `${END_POINT}${url}`;
    const response = await fetch(fullUrl, options);
    if (response.ok) {
      const json = await response.json();
      return json;
    }
    throw new Error('request fail!');
  } catch (e) {
    return [];
  }
};
