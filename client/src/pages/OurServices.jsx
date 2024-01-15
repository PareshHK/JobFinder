import React from "react";
import { Tresbien,  } from "../assets";
import { Tresbien2  } from "../assets";
import { Tresbien3  } from "../assets";


const OurServices = () => {
  return (
    <div>
    <div className='container mx-auto flex flex-col gap-500 2xl:gap-14 py-6' />
      
      <center>
      <h1 className='text-3xl text-blue-600 font-bold mb-5'>Our Services</h1>
      </center>
     
    
      
      
      <div className='w-full flex flex-col-reverse md:flex-row gap-10 items-center p-5'>
        <div className='w-full md:2/3 2xl:w-2/4'>
        <center>
        <p>
        
        A commitment to excellence, innovation, and personalized service,
        <br></br>  
        ensuring every client’s success and every candidate’s career advancement
        <br></br>
        in the competitive world of IT placements.
        <br></br>
        </p>

        </center>
        
        <br></br>
        <center>
        <div>
        <img src={ Tresbien } alt='OurServices' className='w-auto h-[6x00px]' />
      </div>
      </center>
        <br>
        </br>
        <center>
        <h1 className='text-3xl text-blue-600 font-bold mb-5'>Staffing</h1>
      </center>
      <div class="wp-block-columns alignwide is-layout-flex wp-container-core-columns-layout-1 wp-block-columns-is-layout-flex"> 
        <center>
        <div class="wp-block-column is-layout-flow wp-container-core-column-layout-1 wp-block-column-is-layout-flow"></div>
            <h1 class="wp-block-heading font-bold"> IT</h1>

            <p class="has-text-align-left">Connecting tech talent with rewarding opportunities in the dynamic
            <br></br>
             realm of Information Technology, forging career pathways that ignite success.</p>
             <br></br>

            <div class="wp-block-column is-layout-flow wp-container-core-column-layout-1 wp-block-column-is-layout-flow"></div>
            <h3 class="wp-block-heading font-bold">Non IT</h3>

            <p class="has-text-align-left">We offer job placements beyond the IT sector, connecting talent with 
            <br></br>
            diverse opportunities across various non-IT industries..</p>
            <br></br>

            <div class="wp-block-column is-layout-flow wp-container-core-column-layout-1 wp-block-column-is-layout-flow"></div>
            <h3 class="wp-block-heading font-bold"> HR</h3>

            <p class="has-text-align-left">We provide job placements in non-IT sectors as well as specialized 
            <br></br>
            opportunities in the field of Human Resources (HR)..</p>
            <br></br>

            <div class="wp-block-column is-layout-flow wp-container-core-column-layout-1 wp-block-column-is-layout-flow"></div>
            <h3 class="wp-block-heading font-bold"> Banking</h3>

            <p class="has-text-align-left">We offer job placements in banking and finance sectors, connecting 
            <br></br>
            talented individuals with rewarding opportunities in the industry..</p>
            <br></br>

            <div class="wp-block-column is-layout-flow wp-container-core-column-layout-1 wp-block-column-is-layout-flow"></div>
            <h3 class="wp-block-heading font-bold">Pharmaceutical </h3>

            <p class="has-text-align-left">We provide job placements in the pharmaceutical sector, linking skilled 
            <br></br>
            professionals with diverse and rewarding opportunities within the industry.</p>
            <br></br>

            <div class="wp-block-column is-layout-flow wp-container-core-column-layout-1 wp-block-column-is-layout-flow"></div>
            <h3 class="wp-block-heading font-bold">BPO</h3>

            <p class="has-text-align-left">We offer job placements in the Business Process Outsourcing (BPO)  
            <br></br>
            industry, connecting individuals with exciting opportunities in this dynamic field.</p>
            <br></br>

            </center>
            </div>
        <p>
            <center>
            <h1 className='text-3xl text-blue-600 font-bold mb-5'>Recuitment</h1>
            
            Offering comprehensive recruitment solutions tailored to match exceptional talent <br></br>with the perfect opportunities, we navigate the complex terrain of placements with <br></br>expertise, precision, and unwavering dedication.

            </center>
            <br></br>
</p>
<center>
<h3 className="wp-block-heading font-bold">IT Projects</h3>
<ul>
<li >HRMS</li>
<li>CRM</li>
<li>ERP</li>
</ul>
</center>

<center>
        <div>
        <img src={ Tresbien2 } alt='OurServices' className='w-auto h-[500px]' />
      </div>
      </center>

<br></br>
<center>
<h3 className="wp-block-heading font-bold ">Soft Skills and Training</h3>


<ul>
<li >Personality Development
</li>
<li>Mock Interview
</li>
<li>Group Discussion
</li>
<li>Interview Tips
</li>
<li>Techical support</li>
</ul>
</center>

<center>
        <div>
        <img src={ Tresbien3 } alt='OurServices' className='w-auto h-[500px]' />
      </div>
      </center>


</div>

      </div>
    </div>
  );
};

export default OurServices;