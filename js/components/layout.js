/**
 * Load the header and footer HTML into their respective containers.
 *
 * This function waits for both the header and footer to load before
 * returning. If either one fails to load, an error is logged to the
 * console, but the function does not throw an error.
 */
export async function loadLayout() {
    const load = async (id, path) => {
      const container = document.getElementById(id);
      if (container) {
        try {
          const res = await fetch(path);
          const html = await res.text();
          container.innerHTML = html;
        } catch (error) {
          console.error(`Error loading ${path}:`, error);
        }
      }
    };
  
    await Promise.all([
      load('header', '/partials/header.html'),
      load('footer', '/partials/footer.html')
    ]);
  }
 

  