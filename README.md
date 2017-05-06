# Getting Started

In order to modify the IoT website you will need some software. We use
“vagrant” to create a virtual machine to run this software to ensure
that the correct versions are being used, regardless of platform and
platform version.

You will need to install “VirtualBox” and “vagrant” <sup><a id="fnr.1" class="footref" href="#fn.1">1</a></sup>

VirtualBox can be found at: <https://www.virtualbox.org/wiki/Downloads>

Vagrant can be found at: <https://www.vagrantup.com/downloads.html>

Download the appropriate installers and run them.

Assuming you have a “GitHub” account, you should clone the website
source repository (assuming you are starting from your home directory)

Issue the following commands (The “#” and stuff after it is a comment,
don’t type it in!):

    git clone git@github.com:mit-cml/iot-website-source
    cd iot-website-source
    vagrant up  # <– This step will take a *long* time, particularly
                #    the first time you run it.

At this point vagrant is downloading a ubuntu (linux) VM, starting it
up in VirtualBox and provisioning it, which means it is downloading
the software needed to build the website. This takes quite awhile, but
only the first time you do the “vagrant up” command.

# Building the site from Source

Once the commands above are finished (successfully). You can now do:

    vagrant ssh # <– This will connect you to the virtual machine
                #    your next command will be in the context of the
                #    virtual machine
    
    # the next four lines might not be necessary, but Hal and Mark
    # needed them
    cd /vagrant
    npm install
    cd docs
    npm install

    # finally, do

    cd /vagrant/docs
    npm run browser:development

This will compile the source of the website. It will be obvious if
there are errors. If all goes well, you can go to “localhost:3000” on
your host machine with a browser of your choice and see the site.

# Building the site for public distribution

To build the site for upload to the distribution location you do:

    cd /vagrant/docs
    npm run browser:build

If all goes well you can type “exit” (or control-D) to leave the
virtual machine. You then do:

    vagrant halt

This will shutdown the virtual machine. You can then to a “vagrant up”
in the future to test/build the site again. It should be much faster
then the initial time.

## Updating the deployed site

At this point you are going to clone (or “pull” if you already have a
copy) the production built website. You will then update the site from
the files you built above and then you will push it out to production.

**IMPORTANT**: You will not be able to do this until you are
 authorized. Send your “ssh” public key (**not** private key) to
 jis@mit.edu and I can add you.

The details here are for the site as run from our own server at
<http://iot.appinventor.mit.edu>. These details will change when we move
to GitHub.

Assuming you do not have a copy of the site do (from your home directory):

    git clone git@iot.appinventor.mit.edu iot-pages
    cd iot-website-source/docs/build/
    rsync -v -a * ../../../iot-pages/
    cd ../src/www
    rsync -v -a blocks ../../../../iot-pages/
    cd ../../../../iot-pages
    git add . --all
    git commit # <– This will invoke an editor for you to put in the commit comment

The site should now be updated.

# Where the pages are&#x2026;

Adding pages is a bit complicated, but editing the content of existing
pages should be pretty easy.

Each page lives in its own directory (with obvious names). In this
directory will be a “Page.js” (don’t touch this) and a file ending in
“.md”. This is the file you edit. It is in Markdown.

For example the page for the Microbit Accelerometer is located at:
iot-website-source/docs/src/app/gh-pages/pages/components/Microbit/Microbit<sub>Accelerometer</sub>

<div id="footnotes">
<h2 class="footnotes">Footnotes: </h2>
<div id="text-footnotes">

<div class="footdef"><sup><a id="fn.1" class="footnum" href="#fnr.1">1</a></sup> <div class="footpara">If you are running under Linux, you can avoid using VirtualBox and
    can use “lxc” instead, which is much faster. See me for details.</div></div>


</div>
</div>
