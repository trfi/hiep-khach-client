import { DashboardLayout } from "@/components/layouts"
import { NextPageWithLayout } from "@/models"

const Exchange: NextPageWithLayout = () => {
  return (
    <div className="flex gap-6 flex-wrap p-10 justify-center">
      <div className="card w-96 bg-neutral text-slate-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-4xl">$100</h2>
          <p>10,000,000 G</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>

      <div className="card w-96 bg-neutral text-slate-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-4xl">$200</h2>
          <p>200,000,000 G</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>

      <div className="card w-96 bg-neutral text-slate-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-4xl">$300</h2>
          <p>300,000,000 G</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>

      <div className="card w-96 bg-neutral text-slate-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-4xl">$400</h2>
          <p>400,000,000 G</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>

      <div className="card w-96 bg-neutral text-slate-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-4xl">$500</h2>
          <p>500,000,000 G</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>

      <div className="card w-96 bg-neutral text-slate-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-4xl">$1000</h2>
          <p>1000,000,000 G</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

Exchange.Layout = DashboardLayout

export default Exchange