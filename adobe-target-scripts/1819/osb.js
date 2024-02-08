<script>
    window.addEventListener('load',()=>{
        console.log('OT-1819 | OSB ABANDONS')
    console.log('window onload - pending')
        if (/book-a-service/i.test(window.location.href)) {
            console.log('window onload - passed')
            adobe.target.getOffer({
                mbox: 'global-mbox',
                params: {
                    'profile.ie.obsAbandoned': "true",
                },
                success: function (offer) {
                    adobe.target.applyOffer({
                        mbox: 'global-mbox',
                        offer: offer,
                    })
                },
                error: function (status, error) {
                    console.log('Error', status, error)
                },
            })
          
        }
     
    })
 
</script>