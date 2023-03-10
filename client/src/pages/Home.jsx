import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Loader, Card, FormField, RenderCards } from '../components';


export const Home = () => {

  const [loading, setLoading] = useState(false)
  const [allPosts, setAllPosts] = useState(null)
  const [searchText, setSearchText] = useState('')
  const [searchedResults, setSearchedResults] = useState(null)
  const [searchTimeout, setSearchTimeout] = useState(null)
  const { status } = useSelector(state => state.language)

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);

      try {
        const response = await fetch('https://airtistic.onrender.com/api/v1/post', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        })

        if(response.ok) {
          const result = await response.json();
          setAllPosts(result.data.reverse());
        }
      } catch (error) {
        alert(error)
        
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  

  }, [])

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout)

    setSearchText(e.target.value)

    setSearchTimeout(
      setTimeout(() => {
        const searchResults = allPosts.filter((item) => item.name.toLowerCase().includes(searchText.toLowerCase()) || item.prompt.toLowerCase().includes(searchText.toLowerCase()))
        setSearchedResults(searchResults)
  
      }, 500)
    )

  }
  

  return (
    
    <section className='max-w-7-xl mx-auto'>

      <div>

        <h1 className='font-extrabold text-white text-[32px]'>{status ? "Obras de la comunidad" : "The Community Showcase"}</h1>
        <p className='mt-2 text-[#666e75] text-[14px] max-w[500px]'>{status ? "Echa un vistazo a una colección de imágenes imaginativas y visualmente impresionantes generadas por DALL-E." : "Browse through a collection of imaginative and visually stunning images generated by DALL-E"}</p>

      </div>

      <div className='mt-16'>
        <FormField
          labelName={status ? "Busca posts" : "Search Posts"}
          type="text"
          name="text"
          placeholder={status ? "Ejemplo: a fortune-telling shiba inu reading your fate in a giant hamburger, digital art" : "a fortune-telling shiba inu reading your fate in a giant hamburger, digital art"}
          value={searchText}
          handleChange={handleSearchChange}
          
        />
      </div>

      <div className='mt-10'>
        {loading ? (
          <div className='flex justify-center item-center'>
            <Loader />
          </div>
          ) : (
            <>
              {searchText && (
                <h2 className='font-medium text-[#666e75] text-xl mb-3'>{status ? "Mostrando resultados para" : "Showing results for"} <span className='text-[#222328]'>{searchText}</span></h2>
              )}
              <div className='grid lg:grid-cols-4 sm:grid-cols-3 xs:grid.cols-2 grid-cols1 gap-3'>
                {searchText ? (
                  <RenderCards
                    data={searchedResults}
                    title={status ? "No hemos encontrado resultados" : "No search results found"}
                  />
                ) : (
                  <RenderCards 
                    data={allPosts}
                    title={status ? "No hay resultados" : "No posts found"}
                  />

                )}
              </div>
            </>
          )}
      </div>

    </section>


  )
}
