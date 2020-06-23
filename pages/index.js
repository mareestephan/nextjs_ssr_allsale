import Categories from '../components/categories'
import Layout from '../components/layout'

export default function Index(props) {
  return (
    <>

      <Layout>
        <div>

          <Categories categories={props.data} />

        </div>
      </Layout>

    </>
  )
}

export async function getServerSideProps() {

  // const res = await fetch('https://my-json-server.typicode.com/mareestephan/jsonProducts/pages_to_create');
  // const res = await fetch('http://www.json-generator.com/api/json/get/ckeElWByRe?indent=2');
  // const res = await fetch('http://www.json-generator.com/api/json/get/caUKNwsmdK?indent=2');
  const res = await fetch('http://35.190.35.153/api/pages-to-create/all-sale');
  const data = await res.json();

  return (
    {
      props:
        { data }
    }
  )

}
