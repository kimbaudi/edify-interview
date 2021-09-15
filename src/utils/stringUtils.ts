/* return string after last slash
 * ex: '/this/is/path' => 'path'
 * ex: '/this/is/' => ''
 * ex: '/' => ''
 */
export function parseSlug(path: string): string {
  return path.substring(path.lastIndexOf('/') + 1);
  // or
  // return path.split('/').pop()
}

/* capitalize string
 * ex: hello => Hello
 * ex: HELLO => Hello
 */
export function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.substring(1, s.length).toLowerCase();
}

/* converts path into title
 * ex: /path/to/this-is-a-slug => This Is A Slug
 */
export function makeTitle(path: string): string {
  return parseSlug(path)
    .split('-')
    .map((word: string) => capitalize(word))
    .join(' ');
}

/**
 * converts PascalCase into words (INCORRECT)
 * thisIsASlug              => this Is A Slug
 * exampleID                => example I D
 * ThisIsASlug              => This Is A Slug
 * ExampleID                => Example I D
 * PDFSplitAndMergeSamples  => P D F Split And Merge Samples
 * PDFExtractorSDKSamples   => P D F Extractor S D K Samples
 * PDFRendererSDKSamples    => P D F Renderer S D K Samples
 * BarcodeReaderSDKSamples  => Barcode Reader S D K Samples
 * */
export function splitPascal1(str: string): string {
  return str
    .replace(/([A-Z])/g, ' $1')
    .replace(/(\d)/g, ' $1')
    .trim();
}

/**
 * converts PascalCase into words (INCORRECT)
 * thisIsASlug              => This Is A Slug
 * exampleID                => Example I D
 * ThisIsASlug              => This Is A Slug
 * ExampleID                => Example I D
 * PDFSplitAndMergeSamples  => P D F Split And Merge Samples
 * PDFExtractorSDKSamples   => P D F Extractor S D K Samples
 * PDFRendererSDKSamples    => P D F Renderer S D K Samples
 * BarcodeReaderSDKSamples  => Barcode Reader S D K Samples
 * */
export function splitPascal2(str: string): string {
  return str
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (s) => s.toUpperCase())
    .trim();
}

/**
 * converts PascalCase into words (INCORRECT)
 * thisIsASlug              => this Is ASlug
 * exampleID                => example ID
 * ThisIsASlug              => This Is ASlug
 * ExampleID                => Example ID
 * PDFSplitAndMergeSamples  => PDFSplit And Merge Samples
 * PDFExtractorSDKSamples   => PDFExtractor SDKSamples
 * PDFRendererSDKSamples    => PDFRenderer SDKSamples
 * BarcodeReaderSDKSamples  => Barcode Reader SDKSamples
 * */
export function splitPascal3(str: string): string {
  return str.replace(/([a-z])([A-Z])/g, '$1 $2');
  // or
  // return str.replace(/([^A-Z])([A-Z])/g, '$1 $2')
}

/**
 * converts PascalCase into words (INCORRECT)
 * thisIsASlug              => this Is ASlug
 * exampleID                => example ID
 * ThisIsASlug              => This Is ASlug
 * ExampleID                => Example ID
 * PDFSplitAndMergeSamples  => PDFSplit And Merge Samples
 * PDFExtractorSDKSamples   => PDFExtractor SDKSamples
 * PDFRendererSDKSamples    => PDFRenderer SDKSamples
 * BarcodeReaderSDKSamples  => Barcode Reader SDKSamples
 * */
export function splitPascal4(str: string): string {
  return str.replace(/(\B[A-Z])/g, ' $1');
}

/**
 * converts PascalCase (but not camelCase) into words (ALMOST CORRECT)
 * thisIsASlug              => this Is A Slug
 * exampleID                => exampleID
 * ThisIsASlug              => This Is A Slug
 * ExampleID                => Example ID
 * PDFSplitAndMergeSamples  => PDF Split And Merge Samples
 * PDFExtractorSDKSamples   => PDF Extractor SDK Samples
 * PDFRendererSDKSamples    => PDF Renderer SDK Samples
 * BarcodeReaderSDKSamples  => Barcode Reader SDK Samples
 * */
export function splitPascal5(str: string): string {
  return str
    .split(/([A-Z][a-z]+)/)
    .filter((e) => e)
    .join(' ');
}

/**
 * converts PascalCase into words (CORRECT but not for camelCase)
 * ThisIsASlug              => This Is A Slug
 * ExampleID                => Example ID
 * PDFSplitAndMergeSamples  => PDF Split And Merge Samples
 * PDFExtractorSDKSamples   => PDF Extractor SDK Samples
 * PDFRendererSDKSamples    => PDF Renderer SDK Samples
 * BarcodeReaderSDKSamples  => Barcode Reader SDK Samples
 * */
export function splitPascal6(str: string): string {
  return str
    .split(/([A-Z][a-z]+)/)
    .filter((e) => e)
    .join(' ');
}

/**
 * converts camelCase, CamelCase/PascalCase into words (KINDA CORRECT)
 * thisIsASlug              => this Is A Slug
 * exampleID                => example ID
 * ThisIsASlug              => This Is A Slug
 * ExampleID                => Example ID
 * PDFSplitAndMergeSamples  => PDF Split And Merge Samples
 * PDFExtractorSDKSamples   => PDF Extractor SDK Samples
 * PDFRendererSDKSamples    => PDF Renderer SDK Samples
 * BarcodeReaderSDKSamples  => Barcode Reader SDK Samples
 * */
export function splitPascal6Modified(str: string): string {
  return (
    str
      .split(/([A-Za-z][a-z]+)/)
      // or
      // .split(/([A-Za-z0-9][a-z0-9]+)/)
      .filter((e) => e)
      .join(' ')
  );
}

/* removes trailing slash
 * ex: '/this/is/path/' => '/this/is/path'
 * ex: '/' => '/' (do not remove root)
 */
export function stripTrailingSlash(path: string): string {
  return path === `/` ? path : path.replace(/\/$/, ``);
}

export function getQueryParams(s: string): Record<string, string> {
  if (!s || typeof s !== 'string' || s.length < 2) {
    return {};
  }

  return s
    .substr(1) // remove `?`
    .split('&') // split by `&`
    .reduce((acc, curr) => {
      const a = curr.split('='); // split by `=`
      return { ...acc, ...{ [a[0]]: decodeURIComponent(a[1]) } };
    }, {});
}
