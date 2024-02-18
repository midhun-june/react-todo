
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faGoogle, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer(){
    return (
        <div>
            <footer className="bg-dark text-center text-white">
        <div className="container p-4">
          <section className="mb-4">
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
              ><FontAwesomeIcon icon={faFacebook} /></a>

            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
              ><FontAwesomeIcon icon={faTwitter} />
              </a>

            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
              ><FontAwesomeIcon icon={faGoogle} /></a>

          
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
              ><FontAwesomeIcon icon={faInstagram} /></a>

        
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
              ><FontAwesomeIcon icon={faLinkedin} /></a>

            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
              ><FontAwesomeIcon icon={faGithub} /></a>
          </section>

          <section className="">
            <form action="">
              <div className="row d-flex justify-content-center">
                <div className="col-auto">
                  <p className="pt-2">
                    <strong>Sign up for our newsletter</strong>
                  </p>
                </div>

                <div className="col-md-5 col-12">
                  <div className="form-outline form-white mb-4">
                    <input type="email" id="form5Example21" placeholder="Email" className="form-control" />
                  </div>
                </div>

                <div className="col-auto">
                  <button type="submit" className="btn btn-outline-light mb-4">
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </section>

          <section className="mb-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
              repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
              eum harum corrupti dicta, aliquam sequi voluptate quas.
            </p>
          </section>
        </div>
            </footer>
        
        </div>
        
    )
}

export default Footer;