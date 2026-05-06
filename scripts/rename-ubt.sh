#!/usr/bin/env bash
set -e
cd "$(dirname "$0")/../public/images"
SRC="UBT pictures"

declare -A MAP=(
  # Ceilings
  ["20200209_114232"]="ceiling-01"
  ["20220416_174327"]="ceiling-02"
  ["20220804_144033"]="ceiling-03"
  ["20221206_120946"]="ceiling-04"
  ["20230228_163310"]="ceiling-05"
  ["20230312_171333"]="ceiling-06"
  ["20240906_141433"]="ceiling-07"
  ["20241129_102614"]="ceiling-08"
  ["20241129_102646"]="ceiling-09"
  ["20250704_103911"]="ceiling-10"
  ["20250722_134946"]="ceiling-11"
  ["20250729_145615"]="ceiling-12"
  ["20260212_130315"]="ceiling-13"
  # Accent Walls
  ["20220413_204417"]="accent-wall-01"
  ["20220517_162559"]="accent-wall-02"
  ["20220529_130525"]="accent-wall-03"
  ["20220818_173507"]="accent-wall-04"
  ["20221123_092955"]="accent-wall-05"
  ["20230714_145614"]="accent-wall-06"
  ["20230726_164701"]="accent-wall-07"
  ["20230906_162429"]="accent-wall-08"
  ["20231018_165122"]="accent-wall-09"
  ["20240424_135847"]="accent-wall-10"
  ["20240424_150859"]="accent-wall-11"
  ["20241111_134812"]="accent-wall-12"
  ["20241119_084347"]="accent-wall-13"
  ["20241129_092313"]="accent-wall-14"
  ["Screenshot_20240206_111158_Gallery"]="accent-wall-15"
  ["Screenshot_20240206_111651_Gallery"]="accent-wall-16"
  ["Screenshot_20240206_111901_Gallery"]="accent-wall-17"
  # Trimwork
  ["20221118_153901"]="trimwork-01"
  ["20230206_084802"]="trimwork-02"
  ["20231025_190959"]="trimwork-03"
  ["20241119_123024"]="trimwork-04"
  ["20241119_130024"]="trimwork-05"
  ["20241129_092108"]="trimwork-06"
  ["20250307_104758"]="trimwork-07"
  ["20250311_092925"]="trimwork-08"
  ["20250627_141317"]="trimwork-09"
  ["20250911_124224"]="trimwork-10"
  ["20250913_170340"]="trimwork-11"
  ["20251029_143308"]="trimwork-12"
  ["20251223_142252"]="trimwork-13"
  # Entertainment Centers
  ["20220723_143805"]="entertainment-01"
  ["20220908_151241"]="entertainment-02"
  ["20221108_120424"]="entertainment-03"
  ["20230717_085605"]="entertainment-04"
  ["20231211_172217"]="entertainment-05"
  ["20231214_091204"]="entertainment-06"
  ["20240705_125732"]="entertainment-07"
  ["20241218_132259"]="entertainment-08"
  ["20241222_201612"]="entertainment-09"
  ["20250509_155904"]="entertainment-10"
  ["20260212_130256"]="entertainment-11"
  ["20260311_101218"]="entertainment-12"
  ["20260320_144246"]="entertainment-13"
  # Pantries
  ["20220529_130346"]="pantry-01"
  ["20221221_085110"]="pantry-02"
  ["20221221_161908"]="pantry-03"
  ["20230129_082335"]="pantry-04"
  ["20230129_161443"]="pantry-05"
  ["20231103_144427"]="pantry-06"
  ["20241129_092155"]="pantry-07"
  ["20241129_095559"]="pantry-08"
  ["20241129_095622"]="pantry-09"
  ["20251007_130704"]="pantry-10"
  # Offices
  ["20220720_162416"]="office-01"
  ["20240920_173053"]="office-02"
  ["20241129_092224"]="office-03"
  ["20241129_092242"]="office-04"
  ["20241129_092250"]="office-05"
  ["20260212_130348"]="office-06"
)

for src in "${!MAP[@]}"; do
  dst="${MAP[$src]}"
  if [ -f "$SRC/$src.jpg" ]; then
    mv "$SRC/$src.jpg" "$dst.jpg"
  else
    echo "MISSING: $src.jpg"
  fi
done

echo "Done. Remaining in '$SRC':"
ls "$SRC" 2>/dev/null || true
