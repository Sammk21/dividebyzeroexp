import {
  PricedProduct,
  PricedVariant,
} from "@medusajs/medusa/dist/types/pricing"
import { clx } from "@medusajs/ui"

import { getProductPrice } from "@lib/util/get-product-price"
import { RegionInfo } from "types/global"

export default function ProductPrice({
  product,
  variant,
  region,
}: {
  product: PricedProduct
  variant?: PricedVariant
  region: RegionInfo
}) {
  const { cheapestPrice, variantPrice } = getProductPrice({
    product,
    variantId: variant?.id,
    region,
  })

  const selectedPrice = variant ? variantPrice : cheapestPrice

  if (!selectedPrice) {
    return <div className="block w-32 h-9 bg-gray-100 animate-pulse" />
  }

  return (
    <div className="flex flex-col textglobal">
      <span
        className={clx("text-[4.5vw] sm:text-[2vw] lg:text-[1.5vw]", {
          textglobal: selectedPrice.price_type === "sale",
        })}
      >
        {!variant && "From "}
        {selectedPrice.calculated_price}
      </span>
      {selectedPrice.price_type === "sale" && (
        <>
          <p>
            <span className="text-gray-500">Original: </span>
            <span className="line-through">{selectedPrice.original_price}</span>
          </p>
          <span className="text-white">-{selectedPrice.percentage_diff}%</span>
        </>
      )}
    </div>
  )
}
