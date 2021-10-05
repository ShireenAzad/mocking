import "isomorphic-fetch"

export async function mocking() {
  try {
    const result = await fetch(
      `https://dog.ceo/api/breeds/image/random`
    );
    const data = await result.json();
    return data.status
  } catch (e) {
    return Promise.reject(e)
  }
}

console.log(mocking())
export default mocking
