set -e

echo "Building Astro docs..."
cd docs
npm install
npm run build
cd ..

echo "Assembling final site..."
rm -rf public
mkdir -p public/docs

cp index.html style.css idk.css 404.html icon.svg script.js public/ 2>/dev/null || true

cp -r docs/dist/docs/* public/docs/
cp -r docs/dist/_astro public/
cp docs/dist/search.json public/
cp docs/dist/index.html public/docs/index.html

echo "Build complete. Output is in public/"
