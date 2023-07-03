// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const handler = async (event) => {
  try {
    const body = JSON.parse(event.body)

    return {
      statusCode: 200,
      body: body.phone.replace(/\s/g, '').replace('-', '')
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
