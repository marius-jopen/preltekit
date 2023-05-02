<script>
  import { library, libReady } from "./library"

  const icons = import.meta.glob(`$lib/modules/icons/batch-oval/*.svg`, { as: 'raw' });
  const lib = {}

  const init = async () => {
    for (const svgPath in icons) {
      const key = svgPath.replace(`/src/lib/modules/icons/batch-oval/`, '').replace('.svg', '')
      const string = await icons[svgPath]()
      lib[key] = string
    }
    library.set(lib)
    libReady.set(true)
  }

  if (JSON.stringify($library) === '{}') {
    init()
  }
</script>


